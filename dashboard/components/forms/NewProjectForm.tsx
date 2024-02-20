import { JSX, SVGProps } from "react";
import { FirebaseForm } from "./FirestormForm";

type ProjectProps = {
  sidebarForm?: boolean;
  regularForm?: boolean;
};

export default function NewProjectForm({ sidebarForm, regularForm }: ProjectProps) {
  const categoryFields = [
    { name: "name", type: "text", placeholder: "A category name" },
  ];

  const snippetFields = [
    { name: "name", type: "text", placeholder: "A snippet name" },
    { name: "description", type: "textarea", placeholder: "Description" },
    {
      name: "parent",
      type: "select",
      optionsCollection: "categories",
      placeholder: "Select a category",
    },
  ];

  return (
    <>
      {sidebarForm && <FirebaseForm fields={categoryFields} collectionName="categories" />}
      {regularForm && <FirebaseForm fields={snippetFields} collectionName="snippets" />}
    </>
  );
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
