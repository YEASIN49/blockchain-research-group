import React from 'react';
import { BookOutlined } from '@ant-design/icons';
import { Avatar, Card, List, Space, Tag, Typography } from 'antd';
import userPic from '../../Assets/user-profile.png'


// const positionOptions = ['top', 'bottom', 'both'];
// 
// const alignOptions = ['start', 'center', 'end'];

const ListContainer = ({ sectionTitle, data, listType }) => {
  // const [position, setPosition] = useState('bottom');
  // const [align, setAlign] = useState('center');

  // let navigate = useNavigate(); 
  // const routeChange = () =>{ 
  //   let path = `newPath`; 
  //   navigate(path);
  // }

  return (
    <Card title={ sectionTitle } block>
      {/* <Row> */}
        <List
          grid={{ gutter: 16, column: 2, xs: 1, sm: 1, md: 2}}
          pagination={[ 'bottom', 'center' ]}
          dataSource={ data}
          itemLayout={ 'vertical' }
          renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  style={ listType === 'profile' ? { display: 'block'} : {}}
                  avatar={ listType === 'profile' ? <Avatar src={ userPic } size={ 100 } /> : <div ><BookOutlined style={{ fontSize: 30 }}/></div>}
                  title={<a  style={ listType === 'profile' ? { display: 'flex' } : {}} href={ item?.link ?? '' } rel="noreferrer" target="_blank">{ item?.title ?? '-' }</a>}
                  description={ 
                    <Space direction='vertical' size={[0, 5]}> 
                      { listType === 'profile' && <Typography.Text type='secondary'>{ item?.designation ?? '-' }</Typography.Text> }
                      <Typography.Text type='secondary'>{ item?.description ?? '-' }</Typography.Text>
                      <Space direction='horizontal' size={[ 0, 0 ]}>
                        {
                          item?.keyword?.split(',')?.map( tag =>  <Tag color={ "purple" }> { tag }</Tag> ?? '-')
                        }
                      </Space>
                    </Space> }
                />
                
              </List.Item>
          )}
        />
    </Card>
  );
};

export default ListContainer;