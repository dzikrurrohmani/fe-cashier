import { Component } from 'react';
import Menu from '../../features/menu/Menu';
import MenuView from '../../features/menu/MenuView';
import Table from '../../features/table/Table';
import TableView from '../../features/table/TableView';
import TransactionView from '../../features/transaction/TransactionView';
import Welcome from '../../features/welcome/Welcome';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 1,
    };
  }

  welcomeView = () => {
    this.setState({
      view: 1,
    });
  };
  menuView = () => {
    this.setState({
      view: 2,
    });
  };
  tableView = () => {
    this.setState({
      view: 3,
    });
  };
  transactionView = () => {
    this.setState({
      view: 4,
    });
  };

  render() {
    let tampil;
    switch (this.state.view) {
      case 2:
        tampil = <Menu menuView={this.menuView} render={MenuView} />;
        break;
      case 3:
        tampil = <Table tableView={this.tableView} render={TableView} />;
        break;
      case 4:
        tampil = <TransactionView />;
        break;
      default:
        tampil = (
          <Welcome menuView={this.menuView} tableView={this.tableView} transactionView={this.transactionView} />
        );
        break;
    }
    return this.props.render({
      view: tampil,
      welcomeView: this.welcomeView,
      menuView: this.menuView,
      tableView: this.tableView,
      transactionView: this.transactionView,
      handleLog: this.props.handleLog,
    });
  }
}
