import axios from "axios";

export function configQuery(query){
   const dataQuery = JSON.stringify({
    query,
  });
  
  return {
    method: 'post',
    url: 'https://api-eu-central-1.graphcms.com/v2/ckquw4rb48nqb01z671418i4c/master',
    headers: { 
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Mjk4MjQ2ODcsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NrcXV3NHJiNDhucWIwMXo2NzE0MThpNGMvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZGE5NzRkMWItYTg1Yy00ZTUzLWE4ZGYtMTljM2MwM2Y2NTU5IiwianRpIjoiY2tzcWJqZDB3MzhieDAxdzljOGF1MTR5MSJ9.g_iThhQlDEFCbNQXp3pi1e8rexqSJK3xg8U6elt7a3ilQmX3xIDZ5klxxFK1m4jlbxXCuvpBCckWt_srLf2A0eUb7WJFwkz9KgA2iacypBMlvSqROGwl8YwfWrF1YZKcaiIO2O336x1Q6lrXrHyFj8hozOKPfHcKOt25_2Ky5J7RUjTaUnfmcld7mcbczl4iTUUg-OvK6tpH_Xd5o6VCwNpmdL0RQ_p2uz9i9XwcRiapVSXf-W-rgw7V6ENhszI2OsuEtgAoYkX32lxXNhHYU0TowqGHDYg6sFJiTxXYRSuXUyjNYmNhSz8tV8yLMvVaChVz1Ah8R1nXmET-hd09kGG_zc3QnBhKkiJW6DJh88Mfgl40FFpLn0RtUykTFVV5PbhQGYLatJ3JMUf9ImYCdziUL9ZZ_YEcdGEEevXE15WCGS2OAG21A8n3w1Tlh1ISDsONAutQOhD-H1rLd1QZkCn3LNc0JamlD84g4SnLOEMsS7VWm3P35SuXPqljVm5LablgpctBBZ-aD8hO02W3NDNuvO-COlTP3j1v_x0MF84_SD-MvByex8NQkp_dxLcPxQO8-mBmrlPgq8P1yaMpbu7xc3iffiSAKfjaB2u9Yi01i4XvfkuZGP0yVYEqD12m3c4fI97wgGIFCSn4GWZaXKKHtJSvoKl4D3EbaiGYSog', 
      'Content-Type': 'application/json'
    },
    data : dataQuery
  };
}


export function useCmsContext(){
  async function getData(query){
    const response = await axios(configQuery(query))
    return response.data.data;
  }
  return {getData};
}
