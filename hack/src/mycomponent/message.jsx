import React from 'react';
import Avatar from '@mui/material/Avatar';
function Message({name,Job}){
const nm=name.split(' ')
.map(word => word.charAt(0))
.join('');
    return (
        
<>
<div className="bg-white p-15 mb-10 rounded-10">
          <div className="flex mb-10">
            <Avatar>{nm}</Avatar>
            <div className="ml-10">
              <h2>{name}</h2>
              <p className="text-gray-500 text-xs">{Job}</p>
            </div>
     </div>
</div>
</>
    );
}
export default Message;