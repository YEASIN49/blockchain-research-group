import { Card } from "antd";
import React from "react";
import ListContainer from "../Components/Common/ListContainer";

class Members extends React.PureComponent {

    render(){
        const memberList = [
            {
              title: 'Member 1 Member 1 Member Member 1 Member 1 Member ',
              designation: 'Professor',
              link: 'https://google.com',
              keyword: 'Blockchain, Ethereum',
              description: 'This is a dummy description This is a dummy description This is a dummy description This is a dummy description'
            },
            {
              title: 'Member 2',
              designation: 'Asst. Professor',
              link: 'https://google.com',
              keyword: 'Blockchain, Ethereum',
              description: 'This is a dummy description'
            },
            {
              title: 'Member 3',
              designation: 'Associate Professor',
              link: 'https://google.com',
              keyword: 'Blockchain, Fabric',
              description: 'This is a dummy description'
            },
            {
              title: 'Member 4',
              designation: 'Lecturer',
              link: 'https://google.com',
              keyword: 'Blockchain, Solana',
              description: 'This is a dummy description'
            },
          ]
          
        return(
            <Card>
                <ListContainer 
                    sectionTitle={ "Members" } 
                    data={ memberList }
                    listType={ 'profile' }
                />
            </Card>
        )
    }
}

export default Members