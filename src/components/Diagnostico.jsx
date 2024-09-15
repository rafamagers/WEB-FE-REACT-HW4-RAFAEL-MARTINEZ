
function Diagnostico({dofa}) {
  return (
<div className="flex flex-wrap mt-4">
  {dofa.map((item) => (
      <section className="w-1/2 p-4 ">
        <div  className="p-4 border-2 ">
          <h2 className="text-center">
            {item.type}
          </h2>
          <ol className="list-decimal ml-4 space-y-2 pl-4">
            {item.items.map((item2) => (
              <li key={item2.id}>
                {item2.description}
                <p className="my-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quisquam deserunt corporis, officiis modi impedit maxime fugiat, libero exercitationem sed totam neque. Neque sunt officia assumenda aut sed, similique quis.

                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
  ))}
</div>
  );
}

export default Diagnostico;
