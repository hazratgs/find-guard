import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fileUpload } from '../../actions/account'
import Dropzone from 'react-dropzone'
import { Container, Description, Zone, List, ListItem } from './styles'

@connect(
  null,
  dispatch => ({
    fileUpload: bindActionCreators(fileUpload, dispatch)
  })
)
export default class DropZone extends PureComponent {
  state = {
    files: []
  }

  onDrop = (data) => {
    const files = [...this.state.files, ...data]
    this.setState({ files })
    this.props.onChange([...this.state.files, ...files])

    // upload files
    this.props.fileUpload(data)
  }

  remove = (key) => () => {
    const files = this.state.files.filter((item, i) => i !== key)
    this.setState({ files })
    this.props.onChange(files)
  }

  render () {
    const files = this.state.files.map((item, i) => (
      <ListItem key={i}>
        <span>{item.name} ({(item.size / 1024).toFixed(2)} кб)</span>
        <button onClick={this.remove(i)}></button>
      </ListItem>
    ))

    return (
      <Container>
        <Description>Допустимые файлы word, jpg, png, pdf, zip, rar</Description>
        <Dropzone
          accept=".word, .doc, .docx, .jpg, .png, .pdf, .zip, .rar"
          onDrop={this.onDrop}
        >
          {({ getRootProps, getInputProps, isDragActive }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <Zone isDragActive={isDragActive}>
                <p>Перетащите сюда файлы<br/>или нажмите <span>загрузить</span></p>
              </Zone>
            </div>
          )}
        </Dropzone>
        <List>
          {files}
        </List>
      </Container>
    )
  }
}
