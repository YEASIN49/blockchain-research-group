import { Image, Space, Tag, Typography } from "antd"

import userPic from '../../Assets/user-profile.png'

const UserBanner = () => {
    return(
        <Space direction='vertical'>
            <Image
                width={200}
                src={ userPic }
            />
            <Typography.Text strong>
                Md. Yeasin Ali | Research Assistant
            </Typography.Text>
            <Typography.Text strong>
                Department of Computer Science and Engineering, BRAC University
            </Typography.Text>
            <Typography.Text type='secondary'>
                Author ID: <Tag color={ 'success' }>123456</Tag>
            </Typography.Text>

        </Space>
    )
}

export default UserBanner