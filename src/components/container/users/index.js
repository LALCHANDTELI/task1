const Users = () => {
  let user = [];
  const print_users = () => {
    for (let initial = 1; initial < 50; initial++) {
      user.push(initial);
    }
    return user.map((data) => {
      return (
        <tr key={data} className="user">
          <td className="text-center">{data}</td>
          <td>
            <i className="fab fa-youtube mr-3"></i>
            <img
              className="m-1"
              src="http://www.colegiodepadua.com.br/img/user.png"
            />
            John
          </td>
          <td>
            <i className="fas fa-arrows-alt-v mr-2"></i>
            525658.5
          </td>
          <td>
          {data%2===0?<i className="fas fa-arrow-up mr-2"> +525658.5</i>:<i className="fas fa-arrow-down mr-2"> -525658.5</i>}
            
           
          </td>

          <td>
          {data%2!=0?<i className="fas fa-arrow-up mr-2"> +525658.5</i>:<i className="fas fa-arrow-down mr-2"> -525658.5</i>}
          </td>

          <td >5k</td>

          <td >52</td>
        </tr>
      );
    });
  };

  return (
    <table className="mt-3 mb-3 mx-auto table-transparent table-hover">
    <thead>
      <tr>
        <th>Rank</th>
        <th>Creator</th>
        <th>Volume</th>
        <th>24h %</th>
        <th>7d %</th>
        <th>Owners</th>
        <th>Listings</th>
      </tr>
    </thead>
    <tbody>
    {print_users()}
    </tbody>
  </table>
  
  );
};

export default Users;
