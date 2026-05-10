import WorkspaceShell from "@/components/app/workspace-shell"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <WorkspaceShell>{children}</WorkspaceShell>
}
