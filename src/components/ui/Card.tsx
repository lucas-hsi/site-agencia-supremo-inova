import React from 'react'
import clsx from 'clsx'
import { StatusBadge, WorkflowStatus } from './StatusBadge'

type CardVariant = 'info' | 'case' | 'integration' | 'milestone' | 'workflow'

type Props = {
  variant?: CardVariant
  status?: WorkflowStatus
  header?: React.ReactNode
  footer?: React.ReactNode
  children?: React.ReactNode
  className?: string
}

export function Card({ variant = 'info', status, header, footer, children, className }: Props) {
  const classes = clsx('card', `card-${variant}`, className, {
    'workflow-border-in-progress': status === 'in_progress',
    'workflow-border-completed': status === 'completed',
    'workflow-border-risk': status === 'risk',
  })

  return (
    <div className={classes}>
      {(header || status) && (
        <div className="card-header">
          {header}
          {status && <StatusBadge status={status} />}
        </div>
      )}
      {children && <div className="card-body">{children}</div>}
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  )
}