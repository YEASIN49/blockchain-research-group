import React from "react";
import ListContainer from "./ListContainer";

class RecentPublication extends React.PureComponent {

    
    render(){
        const publicationList = [
            {
              title: 'Blockchain Survey 1',
              link: 'https://google.com',
              keyword: 'Blockchain, Ethereum',
              description: 'This is a dummy description'
            },
            {
              title: 'Blockchain Survey 2',
              link: 'https://google.com',
              keyword: 'Blockchain, Ethereum',
              description: 'This is a dummy description'
            },
            {
              title: 'Blockchain Survey 3',
              link: 'https://google.com',
              keyword: 'Blockchain, Fabric',
              description: 'This is a dummy description'
            },
            {
              title: 'Blockchain Survey 4',
              link: 'https://google.com',
              keyword: 'Blockchain, Solana',
              description: 'This is a dummy description'
            },
          ];

        return(
            <div style={ container }>
                <ListContainer 
                    sectionTitle={ "Recent Publications" } 
                    data={ publicationList }
                    listType={ 'publication' }
                />
            </div>
        )
    }
}

const container = {
    // backgroundColor: 'red'
}

export default RecentPublication