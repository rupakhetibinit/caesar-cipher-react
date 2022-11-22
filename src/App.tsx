import { useState } from 'react';
import './App.css';

function App() {
	const [input, setInput] = useState('This is a test');
	const [shift, setShift] = useState(1);
	const [encoding, setEncoding] = useState(true);
	const [resultAfterEncodeOrDecode, setResultAfterEncodeOrDecode] =
		useState<string>('');
	function encrypt(text: any, s: number, bool = true) {
		if (bool === false) {
			s = 26 - shift;
		}
		let result = '';
		for (let i = 0; i < text.length; i++) {
			let char = text[i];
			if (char.charCodeAt(0) == 32) {
				let ch = char;
				result += ch;
			} else if (char.toUpperCase(text[i]) === text[i]) {
				let ch = String.fromCharCode(((char.charCodeAt(0) + s - 65) % 26) + 65);
				result += ch;
				console.log(ch);
			} else {
				let ch = String.fromCharCode(((char.charCodeAt(0) + s - 97) % 26) + 97);
				console.log(ch);
				result += ch;
			}
		}
		return result;
	}
	const calculateCaesarCipher = () => {
		let result = '';
		switch (encoding) {
			case true:
				result = encrypt(input, shift);
				break;
			case false:
				result = encrypt(input, shift, false);
			default:
				break;
		}
		setResultAfterEncodeOrDecode(result);
	};
	// case true:
	// 	console.log(shift);
	// 	for (let i of input) {
	// 		const newI = i.charCodeAt(0) + shift;
	// 		newStuff += String.fromCharCode(newI);
	// 	}
	// 	console.log(newStuff);
	// 	console.log('ran encoding');
	// 	setStuffAfterDoingEncodeOrDecode(newStuff);
	// 	break;
	// case false:
	// 	for (let i of input) {
	// 		const oldI = i.charCodeAt(0) - shift;
	// 		newStuff += String.fromCharCode(oldI);
	// 	}
	// 	console.log(newStuff);
	// 	setStuffAfterDoingEncodeOrDecode(newStuff);
	// default:
	// 	break;

	return (
		<div className='bg-slate-800 text-white w-[100vw] h-[100vh] p-2 flex flex-col items-center'>
			<h1 className='text-2xl'>Simple Caesar cipher made in React</h1>
			<h1>{encoding ? 'Encode' : 'Decode'} Mode</h1>
			<h1 className=' m-2 '>Input</h1>
			<textarea
				className='bg-slate-600 w-[80vw] m-2 overflow-visible resize-none h-[25vh] rounded-md p-1'
				value={input}
				onChange={(e: any) => setInput(e.target.value)}
			/>
			<h1 className=' m-2 '>Output</h1>
			<textarea
				className='outline-none m-2 bg-slate-600 w-[80vw] resize-none h-[25vh] rounded-md p-1'
				value={resultAfterEncodeOrDecode}
				readOnly
			/>

			<button
				className='bg-slate-600 p-2 rounded-sm hover:bg-slate-500 m-2'
				onClick={calculateCaesarCipher}>
				{encoding ? 'Encode' : 'Decode'}
			</button>
			<div className='flex items-center'>
				<button
					className='bg-slate-600 p-2 rounded-sm hover:bg-slate-500 m-2'
					onClick={() => setEncoding((encoding) => !encoding)}>
					Switch to {encoding ? 'Decode' : 'Encode'}
				</button>
				<h2 className='p-2'>Shift Value</h2>
				<input
					type={'number'}
					className='bg-slate-600 p-2 rounded-sm '
					defaultValue={shift}
					onChange={(e: any) => {
						e.target.value < 26 && setShift(e.target.value);
					}}
				/>
			</div>
			<article>
				<p className='m-2'>
					Learn more about
					<a
						className='m-2 hover:text-cyan-500'
						href='https://en.wikipedia.org/wiki/Caesar_cipher'>
						Caesar Cipher
					</a>
				</p>
			</article>
		</div>
	);
}

export default App;
