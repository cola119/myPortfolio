import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import tracko from '../img/tracko.png';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';

const styles = theme => ({
	root: {
		width: "100vw",
		padding: "130px 0px",
		backgroundColor: "#8f8ecb",
		color: "#ffffe6",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	myNameArea: {
		fontSize: "5vw",
		[theme.breakpoints.up('sm')]: {
			fontSize: `60px`
		},
	},
	myName: {
		borderBottom: "solid 3px #9f9ece",
		padding: "10px 30px",
	},
	myContent: {
		paddingTop: "80px",
		color: "#ffffe6",
		width: "80vw",
		[theme.breakpoints.up('sm')]: {
			width: "60vw"
		},
	},
	myContentTitle: {
		fontSize: `calc(100vw / 40)+10`,
		[theme.breakpoints.up('sm')]: {
			fontSize: `25px`
		},
		borderBottom: "solid 3px #9f9ece",
		borderLeft: "solid 10px #9f9ece",
		paddingLeft: "8px"
	},
	myContentArea: {

	},
	myImage: {
		width: "80%",
		display: "block",
		marginLeft: "auto",
		marginRight: "auto",
	},
	button: {
		color: "#ffffe6",
	},
});

const Tracko = (props) => {
	const { classes } = props;
	return (
		<div className={classes.root} id="tracko">
			<div className={classes.myNameArea} >
				<span className={classes.myName}>Realtime GPS tracking system</span>
			</div>
			<div className={classes.myContent}>
				<div className={classes.myContentTitle}>
					開発の背景
				</div>
				<div className={classes.myContentArea}>
					<p>オリエンテーリングには、森の中を走るという競技の性質上、競技者の現在地や様子が伝わりにくいという欠点があります。私はこの問題を、オリエンテーリングが日本で普及していない理由の一つであると考えています。そこで、森のなかの競技者の位置をリアルタイムで表示する観戦システムがあれば観戦者も盛り上がることができ、オリエンテーリングの普及につながると考えました。</p>
				</div>
			</div>
			<div className={classes.myContent}>
				<div className={classes.myContentTitle}>
					アーキテクチャ
				</div>
				<div className={classes.myContentArea}>
					<p>まず森の中を走る競技者に、位置情報を送信できるデバイスを携帯してもらう必要があります。様々なGPSデバイスが存在しますが、今回はスマートフォンを用いることにします。位置情報を送信するだけの簡単なiOSアプリをSwiftで作成しました。GPSデバイスから位置情報をFirebase Realtime Databaseに送信します。そして受信と同時にフロントエンドではReactを用いて表示します。</p>
					<img src={tracko} alt="system" title="trako" className={classes.myImage} /><br/>
					<ul>
						<li>GPSデバイス<br />
							　Swiftを書くのは久しぶりだったのと、位置情報を送信できさえすればよかったので簡単なプログラムとなりました。<br /><br />
						</li>
						<li>データベース<br />
							　リアルタイム性が非常に難しいと思っていましたが、Firebase Realtime Databaseを用いることで非常に簡単に実現できました。DBといえばMySQLなどのリレーショナルデータベースしか設計したことがなかったので、NoSQLに慣れるまで苦労しました。競技者リストや大会情報はすべてDBで保持しています。<br /><br />
						</li>
						<li>フロントエンド<br />
							　開発当初はD3.jsを用いてDOMを直接書き換えるプログラムでした。しかしこのままでは、競技者の切り替えや軌跡表示オプション、スライダーとの連携がかなり厳しくなってしまったので、練習も兼ねてReactを用いてリファクタリングしました。状態管理にはReduxを用い、UIにはMaterial-UI、地図表示にはreact-map-glを用いています。Reactを導入したことによってUIとの連携が取りやすくなり機能拡張もやりやすくなりました。そしてなにより、書いてて楽しいです。
						</li>
					</ul>
				</div>
			</div>
			<div className={classes.myContent}>
				<div className={classes.myContentTitle}>
					感想・今後
				</div>
				<div className={classes.myContentArea}>
					<p>
						システムの構想を思いついた当初は、どこかで詰まって実現できないと考えていました。しかし、実際に書いてみると基本的なことの積み重ねだけで実現でき、非常に感動しています。特に、GPS端末にスマートフォンを用いたこと、Firebase、Reactを導入したことで開発が非常に進みました。React,Reduxは初めてだったので、まだreducerの概念やContainer componentとPresentational componentの分離などわかっていない部分が多いので勉強していこうと思います。
					</p>
					<Button href='https://tracko.o-app.net/' variant="outlined" className={classes.button} target='_blank'>
						View
					</Button>
					<IconButton aria-label="GitHub" href='https://github.com/cola119/tracko-react' target='_blank'>
						<GitHub nativeColor="#ffffe6"/>
					</IconButton>
				</div>
			</div>
		</div>
	);
}

function GitHub(props: Object) {
	return (
	<SvgIcon {...props}>
		<path d="M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z" />
	</SvgIcon>
	);
}
export default withStyles(styles)(Tracko);
