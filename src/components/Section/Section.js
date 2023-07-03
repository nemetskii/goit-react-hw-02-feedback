import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

export default class Section extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  };
  render() {
    return (
      <section className={css.section} title={this.props.title}>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}
