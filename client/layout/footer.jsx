import '../asset/css/footer.styl'

export default {
  data () {
    return {
      auth: 'gpc'
    }
  },
  render () {
    return (
      <div id="footer">
        <span>Wirtten by {this.auth}</span>
      </div>
    )
  }
}