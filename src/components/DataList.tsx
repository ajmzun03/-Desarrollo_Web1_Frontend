export const DataList = ({ data = [] }) => {
  return (
    <>
      <label htmlFor="rol">Rol de acceso</label>
      <input list="roles" name="rol" id="rol" />
      
      <datalist id="roles">
        {data.map((role, index) => (
          <option key={index} value={role} />
        ))}
      </datalist>
    </>
  );
};
