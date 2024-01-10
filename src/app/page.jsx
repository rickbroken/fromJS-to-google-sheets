import 'tailwindcss/tailwind.css';
import Header from '@/components/Header';
import FormReport from '@/components/FormReport';



export default function Home() {

  return (
    <main className="flex justify-center w-full py-4">
      <div className="max-w-96 w-full bg-white px-4 py-4 rounded">
        <Header />

        <p className="font-bold text-center py-2">Guardar reporte de llamada en DRIVE</p>

        <FormReport />

      </div>
    </main>
  )
}
