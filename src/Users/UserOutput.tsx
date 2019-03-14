import * as React from 'react';

export interface IProps{
    userName:any
} 
class UserOutput extends React.Component<IProps>{
    public render(){
        const style={
            border:'1px solid #eee',
            boxShadow:'0 2px #ccc',
            margin: '20px auto',
            padding:'10px',
            width:'400px'
        }
        return(
            <div className="Output" style={style}>
                <p>User Name: {this.props.userName}</p>
                <p>Paragraph 2</p>
                <p>Paragraph 2</p>
            </div>
        )
    };
}

export default UserOutput;