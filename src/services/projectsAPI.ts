import { Project } from "../types";

export function addProject(project: Project): void {
  const projects = JSON.parse(localStorage.getItem("projects") || "[]");
  localStorage.setItem("projects", JSON.stringify([...projects, project]));
}

export function getProjects(): Project[] {
  return JSON.parse(localStorage.getItem("projects") || "[]");
}

export function updateProjects(projects: Project[]): void {
  localStorage.setItem("projects", JSON.stringify(projects));
}
