import React, { Component } form 'react'
import axios from 'axios'
import config from '../apiConfig'

class Api extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: null,
      rootUrl: config.rootUrl
    }
  }

  get = url => {
    return axios.get(this.state.rootUrl + url)
  }

  post = (url, data) => {
    return axios.post(this.state.rootUrl + url, data)
  }

  put = (url, data) => {
    return axios.put(this.state.rootUrl + url, data)
  }

  delete = url => {
    return axios.delete(this.state.rootUrl + url)
  }

  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        get: this.get,
        post: this.post,
        put: this.put,
        delete: this.delete
      })
    })
    return (
      <>
        {
          children
        }
      </>
    )
  }
}
