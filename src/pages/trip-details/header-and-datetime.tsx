import { MapPin, Calendar, Settings2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { api } from "../../lib/axios";
import { format } from "date-fns";


interface Trip {
  id: string
  destination: string
  starts_at: string
  ends_at: string
  is_confirmed: boolean
}


export function HeaderAndDateTime() {
  const { tripId } = useParams()
  const [trip, setTrip] = useState<Trip | undefined>()

useEffect(() => {
  api.get(`/trips/${tripId}`).then(response => setTrip(response.data.trip))
}, [tripId]);

const displayedDate = trip ? format(trip.starts_at, "d' de 'LLL").concat(' até ').concat(format(trip.ends_at, "d' de 'LLL")) : null


  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
        <div className="gap-2 flex items-center">
          <MapPin className="size-5 text-zinc-400" />
          <span className="text-zinc-100">{trip?.destination}</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="gap-2 flex items-center">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-zinc-100">{displayedDate}</span>
          </div>

          <div className="w-px h-6 bg-zinc-800" />

          <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
            Alterar Local/Data
            <Settings2 className="size-5" />
          </button>
        </div>
      </div>
  )
}