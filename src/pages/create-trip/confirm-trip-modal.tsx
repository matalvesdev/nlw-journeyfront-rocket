import { Mail, Plus, User, X } from "lucide-react"
import { FormEvent } from "react"

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
  setOwnerEmail: (name: string) => void
  setOwnerName: (email: string) => void
}

export function ConfirmTripModal ({
  closeConfirmTripModal,
  createTrip,
  setOwnerEmail,
  setOwnerName,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-blac/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Confirmar criação de viagem</h2>
                <button type="button" onClick={closeConfirmTripModal}>
                  <X className="size-5 text-zinc-400"/>
                </button>
              </div>
              <p className="text-sm text-zinc-400">Para concluir a criação da viagem para <span className="font-semibold text-zinc-100">Florianópolis, Brasil</span> nas datas de <span className="font-semibold text-zinc-100">16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:</p>
            </div>
                  
          

              <form onSubmit={createTrip} className="space-y-3">
              <div  className="px-5 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <User className="text-zinc-400 size-5"/>
                <input
                name="name"
                placeholder="Seu nome completo"
               onChange={event => setOwnerName(event.target.value)}
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
              </div>

              <div  className="px-5 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Mail className="text-zinc-400 size-5"/>
                <input
                type="email"
                name="email"
                placeholder="Seu e-mail pessoal"
                onChange={event => setOwnerEmail(event.target.value)}
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
              </div>

              <button type="submit" className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 h-11 font-medium flex items-center gap-2 hover:bg-lime-400 w-full justify-center">
              Confirmar criação da viagem
                <Plus className="size-5" />
              </button>
              </form>

              
            
          </div>
        </div>
  )
}