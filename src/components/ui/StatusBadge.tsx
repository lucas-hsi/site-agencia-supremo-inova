import React from 'react'
import clsx from 'clsx'

export type WorkflowStatus = 'in_progress' | 'completed' | 'risk'

const labelMap: Record<WorkflowStatus, string> = {
  in_progress: 'Em progresso',
  completed: 'Concluído',
  risk: 'Em risco',
}

type Props = { status: WorkflowStatus; className?: string }

export function StatusBadge({ status, className }: Props) {
  const classes = clsx('status-badge', className, {
    'status-in-progress': status === 'in_progress',
    'status-completed': status === 'completed',
    'status-risk': status === 'risk',
  })
  return <span className={classes}>{labelMap[status]}</span>
}