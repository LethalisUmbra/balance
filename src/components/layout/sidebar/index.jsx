export default function Sidebar() {
  return (
    <div className='h-[100dvh] bg-white dark:bg-[#121212] min-w-[200px] z-10 shadow'>
      <div className='bg-white dark:bg-[#121212] p-4 min-h-[10dvh] flex items-center justify-center'>
        <h1 className='font-bold text-3xl text-gray-800 dark:text-gray-200'>
          Balance
        </h1>
      </div>
      <ul className='flex flex-col gap-3 p-4'>
        <li>este mes</li>
        <li>historial</li>
        <li>configuración</li>
      </ul>
    </div>
  );
}
