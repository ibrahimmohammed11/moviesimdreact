import jwtDecode from "jwt-decode";
import SecureLS from 'secure-ls';
var ls = new SecureLS({encodingType: 'aes'});



export let decodedToken = jwtDecode(ls.get('CurrentUser'));



