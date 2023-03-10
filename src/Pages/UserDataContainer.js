import React from 'react'
import { connect } from 'react-redux'

// Import Components
import { Card, Divider, Image, Space, Tag, Typography } from 'antd'
import UserProfileForm from '../Components/Layout/UserProfileForm'
import UserBanner from '../Components/Common/UserBanner'
import { useParams } from 'react-router-dom'
import UserData from '../Components/Common/UserData'

const UserDataContainer = () => {   
    const { id } = useParams()

    return (
        <Card hoverable>
            <Card style={{ backgroundColor: '#eff1f5', textAlign: 'center' }}>
                <UserBanner />
            </Card>

            <Divider />

            <UserData />
        </Card>
    )
}


// Map State To Props
// const mapStateToProps = (state) => ({

// })

// Map Dispatch To Props
// const mapDispatchToProps = (dispatch) => ({ dispatch })

export default UserDataContainer