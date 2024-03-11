import React from 'react';
import { SafeAreaView, Alert } from 'react-native'
import { connect } from 'react-redux'
import OrderListContainer  from '../containers/OrderList'
import OrderActions from '../redux/order'

class OrderList extends React.Component {
  constructor(props){
    super(props)
  }
  static navigationOptions = {
   headerTitle: 'Orders',
  };
  
  componentDidMount() {
    this.props.requestUserOrders()

  }

  render = () => {
    return (
        <SafeAreaView style = {{flex:1}}>
            <OrderListContainer/>
        </SafeAreaView>
    )
  }

}

const mapStateToProps = state => {
  return {}
}


const mapDispatchToProps = dispatch => {
  return {
    requestUserOrders: () => {
      dispatch(OrderActions.requestUserOrders() )
    }
  }
}


const OrderListScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderList)


export default OrderListScreen