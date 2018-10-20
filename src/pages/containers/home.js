import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import '../components/home-layout.css'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'

class Home extends Component {
    state = {
        modalVisible: true,
    }

    handleCloseModalClick => {
        this.setState({
            modalVisible: false,
        })
    }

    render(){
        return (
            <HomeLayout>
                <Related />
                <Categories categories={this.props.data.categories}/>
                <ModalContainer>
                    <Modal>
                        handleCloseCLick={this.handleCloseModalClick}
                        <h1>Esto es un portal</h1>
                    </Modal>
                </ModalContainer>
            </HomeLayout>
        )
    }
}

export default Home
