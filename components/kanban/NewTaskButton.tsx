"use client"

import React, { useState } from "react"
import { useRouter } from "next/router"
import { useAuth } from "@/core/database/auth"
import { addTask } from "@/core/database/firestore"
import { useAppDispatch } from "@/core/redux/store"
import { fetchTasks } from "@/core/redux/tasksSlice"
import { FloatButton, Form, Modal, message } from "antd"
import dayjs from "dayjs"
import { AiOutlinePlus } from "react-icons/ai"

import { Task } from "@/core/types/kanban"
import { TaskForm } from "@/components/kanban/TaskForm"

export const NewTaskButton: React.FC<{}> = () => {
  const { user } = useAuth()
  const router = useRouter()
  const { projectId } = router.query
  const dispatch = useAppDispatch()
  const [showModal, setShowModal] = useState(false)
  const [modalConfirmLoading, setModalConfirmLoading] = useState(false)
  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()

  const handleModalOk = () => {
    form
      .validateFields()
      .then((values: Task) => {
        const { due, ...restValues } = values
        const newTask: Task = {
          ...restValues,
          ...(due && { due: dayjs(values.due).format() }),
          phase: 0,
          createDate: dayjs().format(),
        }
        setModalConfirmLoading(true)
        addTask(user?.uid ?? "", projectId as string, newTask)
          .then(() => {
            form.resetFields()
            messageApi.success("The task added!")
            dispatch(
              fetchTasks({
                userId: user?.uid ?? "",
                projectId: projectId as string,
              })
            )
            setShowModal(false)
          })
          .catch((e) => {
            messageApi.error("Failed!")
            console.error(e)
          })
          .finally(() => {
            setModalConfirmLoading(false)
          })
      })
      .catch((e) => {
        console.error("Validate Failed: ", e)
      })
  }

  return (
    <>
      {contextHolder}
      <FloatButton
        shape="square"
        type="primary"
        tooltip="Add Task"
        icon={<AiOutlinePlus />}
        onClick={() => setShowModal(true)}
      />
      <Modal
        title="New Task"
        open={showModal}
        onOk={handleModalOk}
        confirmLoading={modalConfirmLoading}
        onCancel={() => setShowModal(false)}
      >
        <TaskForm form={form} />
      </Modal>
    </>
  )
}
