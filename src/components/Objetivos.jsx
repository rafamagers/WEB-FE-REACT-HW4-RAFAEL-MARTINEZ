function Objetivos({ objetivos }) {
  return (
    <>
      <table className="table-fixed min-w-full my-4 border-separate border-spacing-4">
        <thead>
          <tr>
            <th className="w-[12.5%]">Código</th>
            <th className="w-[37.5%]">Objetivo</th>
            <th className="w-[12.5%]">Meta</th>
            <th className="w-[12.5%]">Avance</th>
            <th className="w-[12.5%]">Cumplimiento</th>
            <th className="w-[12.5%]">Estado</th>
          </tr>
        </thead>
        <tbody>
          {objetivos.map((item) => {
            var complianceClass = '';
            var complianceStatus = '';

            if (item.compliance >= 0 && item.compliance <= 35) {
              complianceClass = 'text-red-500'; 
              complianceStatus = 'Crítico';
            } else if (item.compliance >= 36 && item.compliance <= 75) {
              complianceClass = 'text-orange-500'; 
              complianceStatus = 'Aceptable';
            } else if (item.compliance >= 76 && item.compliance <= 100) {
              complianceClass = 'text-green-500'; 
              complianceStatus = 'Exitoso';
            }
            return (
              <tr key={item.id}>
                <td>100{item.id}</td>
                <td>{item.goal}</td>
                <td>${item.target}</td>
                <td>${item.progress}</td>
                <td>{item.compliance}%</td>
                <td className={complianceClass}>{complianceStatus}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );
}

export default Objetivos;
