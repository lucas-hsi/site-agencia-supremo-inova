import { SideModal } from './SideModal'
import ContactForm from './ContactForm'
import { useContactModal } from '../../hooks/useContactModal'

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal()

  return (
    <SideModal isOpen={isOpen} onClose={closeModal} title="Falar com Especialista" className="max-w-2xl">
      <ContactForm onSubmitted={closeModal} />
    </SideModal>
  )
}