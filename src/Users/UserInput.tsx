import * as React from 'react';

export interface IProps{
    changed:any
}
class UserInput extends React.Component<IProps> {
    public render(){
        const style={
            border:'1px solid #eee',
            boxShadow:'0 2px #ccc',
            margin: '20px auto',
            padding:'10px',
            width:'400px'
        }
           return(
               <div style={style} className="Input">
               <span>User Input Component</span>
               <div>User Name: 
                   <input type="text" onChange={this.props.changed} />
               </div>
               </div>
           )
    };
}

export default UserInput;