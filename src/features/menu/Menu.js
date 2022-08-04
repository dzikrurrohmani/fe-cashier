import { Component } from 'react';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      price: '',
      isSubmitting: false,
    };
  }

  onChange = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  onSubmitting = (value) => {
    this.setState({
      isSubmitting: value,
    });
  };

  onSubmit = () => {
    console.log(1);
    let newMenu = {
      id: this.state.id,
      name: this.state.name,
      price: this.state.price,
    };
    this.props.handleSubmit(this.props.stateKey, [
      ...this.props.menuList,
      newMenu,
    ]);
    this.setState({
      isSubmitting: false,
      id: this.state.id,
      name: this.state.name,
      price: this.state.price,
    });
  };

  render() {
    return this.props.render({
      id: this.state.id,
      name: this.state.name,
      price: this.state.price,
      menuList: this.props.menuList,
      handleDelete: this.props.handleDelete,
      isSubmitting: this.state.isSubmitting,
      onSubmitting: this.onSubmitting,
      onSubmit: this.onSubmit,
      onChange: this.onChange,
    });
  }
}