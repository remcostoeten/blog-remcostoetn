"use client"
import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import LabelPill from "./LabelPill";
import FilterDropdown from "./FilterDropdown";
import { fetchGithubIssues } from '@/core/lib/fetchGithubIssues';

function SearchBar() {
  return (
    <div className="relative">
      <Input placeholder="Search data..." type="search" />
    </div>
  )
}

function TableToolbar({ onFilter }) {
  const [labels, setLabels] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);

  useEffect(() => {
    const getLabels = async () => {
      const tasks = await fetchGithubIssues();
      const priorityLabels = ["Medium priority", "High priority", "Low priority"];
      const allLabels = tasks.flatMap((task) => task.labels || []);
      const filteredLabels = allLabels.filter((label) => !priorityLabels.includes(label.name));

      const uniqueLabels = filteredLabels.reduce((unique, label) => {
        return unique.some((u) => u.name === label.name) ? unique : [...unique, label];
      }, []);

      setLabels(uniqueLabels);
    };

    getLabels();
  }, []);

  const handleLabelSelect = (selectedLabel) => {
    setActiveFilters([...activeFilters, selectedLabel]);
    onFilter(selectedLabel);
  };

  return (
    <div className="my-4 flex items-center justify-between space-x-4">
      <SearchBar />
      <FilterDropdown labels={labels.map(label => label.name)} onSelect={handleLabelSelect} />
    </div>
  );
}

export default TableToolbar;