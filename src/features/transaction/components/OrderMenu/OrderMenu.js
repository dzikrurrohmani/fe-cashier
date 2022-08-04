import { Component } from 'react';
import MenuService from '../../../../services/MenuService';
import OrderForm from '../OrderForm/OrderForm';
import { addOrder, addFBMenu } from '../../state/TransactionAction';
import { connect } from 'react-redux';
import './OrderMenu.css';

export class OrderMenu extends Component {
  constructor(props) {
    super(props);
    this.service = MenuService();
    this.state = {
      menuList: [],
      isShowingForm: false,
      menuSelected: {},
    };
  }

  onGetMenus = async () => {
    // this.props.onShowLoading(true)
    try {
      const foods = await this.service.getMenuByCategory('food');
      const beverages = await this.service.getMenuByCategory('beverage');
      this.props.addFBMenu(foods, beverages);
      // this.props.onShowLoading(false);
    } catch (e) {
      this.props.onShowError(e.message);
    }
  };

  componentDidMount() {
    this.onGetMenus();
  }

  handleGetFoodMenu = (category) => {
    if (category === 'food') {
      this.setState({
        menuList: this.props.menus.catalogue.foods,
      });
    }
    if (category === 'beverage') {
      this.setState({
        menuList: this.props.menus.catalogue.beverages,
      });
    }
  };

  handleShowingForm = (menu) => {
    this.setState({
      isShowingForm: !this.state.isShowingForm,
      menuSelected: menu,
    });
    console.log(menu);
  };

  handleAddOrder = (qty) => {
    this.props.addOrder(this.state.menuSelected, qty);
    this.setState({
      isShowingForm: false,
      menuSelected: {},
    });
  };
  render() {
    return (
      <div className='menu-item-container' style={{ display: 'flex' }}>
        <div style={{display: 'flex', flexDirection: 'row', height: '100%'}}>
        <div>
          <div className='menu-item menu-header' onClick={() => this.handleGetFoodMenu('food')}>Food</div>
          <div className='menu-item menu-header' onClick={() => this.handleGetFoodMenu('beverage')}>Beverage</div>
        </div>
        <div
          style={{ borderRight: '3px solid gainsboro', margin: '8px', height:'98%' }}
        ></div>
        </div>
        <div className='outer-container'>
        <div className='menu-list-container'>
          {this.state.menuList.map((f) => {
            return (
              <div className='menu-item app-color' onClick={() => this.handleShowingForm(f)} key={f.id}>
                {f.name}
              </div>
            );
          })}
          {this.state.isShowingForm && <OrderForm onAddOrder={this.handleAddOrder} onCancel={this.handleShowingForm} />}
        </div>
        </div>
        <div
          style={{ borderRight: '3px solid gainsboro', margin: '8px', height:'98%', right:'0' }}
        ></div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addFBMenu,
  addOrder,
};
const mapStateToProps = (state) => {
  return {
    menus: state.transactionReducer,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderMenu);