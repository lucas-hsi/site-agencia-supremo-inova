import { User, Users, LayoutGrid, Puzzle, Bell } from 'lucide-react'

export type IconName = 'user' | 'team' | 'projects' | 'integrations' | 'notifications'

export const Icons: Record<IconName, React.ComponentType<any>> = {
  user: User,
  team: Users,
  projects: LayoutGrid,
  integrations: Puzzle,
  notifications: Bell,
}