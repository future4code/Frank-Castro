import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
// 	state = {

// 	}

// 	onChangeComentario() {

// 	}

// 	render() {
// 		return <div className={'comment-container'}>
// 			<input
// 				className={'input-comentario'}
// 				placeholder={'Comentário'}
// 				value={''}
// 				onChange={this.onChangeComentario}
// 			/>
// 			<button onClick={this.props.aoEnviar}>Enviar</button>
// 		</div>
// 	}
// }

state = {
		valorInput: ''
	}

	onChangeComentario = (event) => {
    this.setState({valorInput: event.target.value})
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				onChange={this.onChangeComentario}
				value={this.state.valorInput}
				
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}