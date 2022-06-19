<template>
	<!-- footer -->
	<footer class="footer" v-show="!$route.meta.isShow">
		<div class="container-fluid">
			<div class="row">
				<!-- 第一次 row col-lg-8 -->
				<div class="col-lg-8 col-xs-12">
					<div class="row">
						<!-- 第一个 row col-lg-3 -->
						<div class="col-lg-3 col-xs-3">
							<p>
								<span>专属服务</span>
							</p>
							<p>
								<img src="./images/distribution.svg">
								<a href="#">免费标准配送</a>
							</p>
							<p>
								<img src="./images/bag.svg">
								<a href="#">免费礼品包装</a>
							</p>
							<p>
								<img src="./images/make.svg">
								<a href="#">预约门店服务</a>
							</p>
							<p class="footer_special_p"><a href="#">需要帮助？</a></p>
							<p><a href="#">联系我们</a></p>
							<p><a href="#">常见问题</a></p>
						</div>
						<!-- 第二个 row col-lg-3 -->
						<div class="col-lg-3 col-xs-3">
							<p>
								<span>购物帮助</span>
							</p>
							<p><a href="#">支付相关</a></p>
							<p><a href="#">配送</a></p>
							<p><a href="#">退换货</a></p>
							<p><a href="#">发票</a></p>
							<p><a href="#">保养与维修</a></p>
						</div>
						<!-- 第三个 row col-lg-3 -->
						<div class="col-lg-3 col-xs-3">
							<p>
								<span>关于公司</span>
							</p>
							<p><a href="#">关于BEW Clothing</a></p>
							<p><a href="#">BEW Clothing EQUILIBRIUM</a></p>
							<p><a href="#">道德规范</a></p>
							<p><a href="#">职业发展</a></p>
							<p><a href="#">细则及条款</a></p>
							<p><a href="#">隐私与COOKIE</a></p>
							<p><a href="#">企业信息</a></p>
						</div>
						<!-- 第四个 col-lg-3 -->
						<div class="col-lg-3 col-xs-3">
							<p>
								<span>关注BEW Clothing</span>
							</p>
							<p class="footer_special_p_2">
								<img src="./images/wechat.svg">
								<a href="#">微信</a>
							</p>
							<p class="footer_special_p_2">
								<img src="./images/blog.svg">
								<a href="#">微博</a>
							</p>
							<p class="footer_special_p_2">
								<img src="./images/tiktok.svg">
								<a href="#">抖音</a>
							</p>
							<p class="footer_special_p_2">
								<img src="./images/video.svg">
								<a href="#">腾讯视频</a>
							</p>
							<p class="footer_special_p_2">
								<img src="./images/book.svg">
								<a href="#">小红书</a>
							</p>
							<p class="footer_special_p_2 footer_special_p_3">
								<img src="./images/news.svg">
								<a href="#">在线顾问</a>
							</p>
							<p class="footer_special_p_2">
								<img src="./images/telephone.svg">
								<a href="#">400.0000.000</a>
							</p>
						</div>
					</div>
					<!-- footer 最后一行 -->
					<div class="row network">
						<div class="col-lg-5">
							©2022 BC（中国）贸易有限公司 保留所有权利
						</div>
						<div class="col-lg-3">
							<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010602001727">
								<img src="./images/network.png" width="12">
							</a>
							沪公网安备 00000000001号
						</div>
						<div class="col-lg-4">
							<a
								href="http://wap.scjgj.sh.gov.cn/businessCheck/verifKey.do?showType=extShow&serial=9031000020170531142050000001818527-SAIC_SHOW_310000-4028e4cb641aec46016475f8a0580996363&signData=MEYCIQCVipH/vfOOhUWmiXeifxamxIi2eNI+Zaq1gCLzynu5MQIhAPGU+MfT/b35W76m7+3wG79CgQyG+Mg2W+n+fe1jfbGo&nsukey=TTnuChHEvuMqfkePGOEnd9W%2F9C5BHWg%2FpuCkKj09p5EJ%2BpdmzF7I0Ht3FprMQXIK86UbS9cDTAJdvhEyMIvTXU0ftpJKSbJVpjw%2FUdQ2K79fvqgoKff%2BXCVkD89cIrkfZDwVkqW5hXuSxkXCTN%2FXTA1VW1PuBMALjJXVPDz755W5732G00otZHY2NuBuGkZEaTzpCtssfuunOelp7jAJkg%3D%3D">
								<img src="./images/network.png" width="12">
							</a>
							上海工商
							<span>沪ICP备00000000号-0</span>
						</div>
					</div>
				</div>

				<!-- 第一次 row col-lg-3 -->
				<div class="col-lg-3 col-lg-offset-1 col-xs-12">
					<p>
						<span>订阅BEW Clothing电子资讯</span>
					</p>
					<p class="footer_special_p_4">通过订阅，即代表您接受BC的<a href="#">隐私政策条款</a></p>
					<!-- input-group 开始-->
					<div class="row row_input_group">
						<div class="col-lg-9">
							<div class="input-group">
								<input type="text" class="form-control" placeholder="电子邮件地址">
								<span class="input-group-btn">
									<button class="btn btn-default" type="button">
										<img src="./images/right.svg">
									</button>
								</span>
							</div>
						</div>
					</div>
					<!-- input-group 结束-->

					<p class="footer_special_p_5">直营店查询</p>

					<!-- 第二个 input-group 开始-->
					<div class="row row_input_group">
						<!-- 请选择省 -->
						<div class="col-lg-6">
							<div class="input-group">
								<div class="input-group-btn">
									<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"
										aria-haspopup="true" aria-expanded="false">
										请选择省
										<span class="caret"></span>
									</button>
									<ul class="dropdown-menu dropdown-menu-right">
										<li><a href="#">Action</a></li>
										<li><a href="#">Another action</a></li>
										<li><a href="#">Something else here</a></li>
										<li><a href="#">Action</a></li>
										<li><a href="#">Another action</a></li>
										<li><a href="#">Something else here</a></li>
										<li><a href="#">Action</a></li>
										<li><a href="#">Another action</a></li>
										<li><a href="#">Something else here</a></li>
										<li><a href="#">Action</a></li>
										<li><a href="#">Another action</a></li>
										<li><a href="#">Something else here</a></li>
										<li role="separator" class="divider"></li>
										<li><a href="#">Separated link</a></li>
									</ul>
								</div>
							</div>
						</div>

						<!-- 请选择市 -->
						<div class="col-lg-6">
							<div class="input-group">
								<div class="input-group-btn">
									<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"
										aria-haspopup="true" aria-expanded="false">
										请选择市
										<span class="caret"></span>
									</button>
									<ul class="dropdown-menu dropdown-menu-right">
										<li><a href="#">Action</a></li>
										<li><a href="#">Another action</a></li>
										<li><a href="#">Something else here</a></li>
										<li><a href="#">Action</a></li>
										<li><a href="#">Another action</a></li>
										<li><a href="#">Something else here</a></li>
										<li><a href="#">Action</a></li>
										<li><a href="#">Another action</a></li>
										<li><a href="#">Something else here</a></li>
										<li><a href="#">Action</a></li>
										<li><a href="#">Another action</a></li>
										<li><a href="#">Something else here</a></li>
										<li role="separator" class="divider"></li>
										<li><a href="#">Separated link</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<!-- 第二个 input-group 结束-->

					<p>
						<small>查找其他地区直营店</small>
						<small>预约门店服务</small>
					</p>
					<p class="footer_special_p_6">
						<img src="./images/B.svg">
						<img src="./images/E.svg">
						<img src="./images/C.svg">
					</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		name: 'Footer'
	}
</script>

<style scoped lang="less">
	/* footer 样式 */
	.footer {
		width: 100%;
		height: auto;
		margin-top: 9vh;
		position: relative;
		bottom: 0;
		background-color: #1B1B1B;

		/* container-fluid 两边的宽度 */
		.container-fluid {
			width: 80%;
			padding-top: 62px;

			.row {

				.col-lg-8 .row .col-lg-3 p {
					font-size: 12px;
					color: #807d7a;

					/* 设置 footer 里面的 svg 的位置: 免费标准配送 */
					img {
						position: relative;
						top: -2px;
						margin-right: 5px;
					}

					span {
						display: inline-block;
						padding-bottom: 20px;
					}
				}

				.col-lg-3 {
					.row_input_group {
						margin: 20px 0;

						div {
							padding: 0;
						}

						input {
							border-radius: 0;
							background-color: #000000;
							border: none;
							outline: none;
							text-indent: 10px;
							height: 28px;
							color: #FFFFFF;
							font-size: small;
							box-shadow: none;
						}

						button {
							background-color: #000000;
							border: none;
							outline: none;
							height: 28px;
							color: #E5DFD9;
							font-size: small;
						}

						button:active {
							background-color: #4d4c4a;
						}

						.col-lg-6 {
							margin-top: 10px;

							button {
								width: 90%;
							}

							ul.dropdown-menu {
								height: 20vh;
								background-color: #FFFFFF;
								overflow-y: scroll;
							}
						}
					}

					p span {
						font-size: 12px;
						color: #807d7a;
					}

				}

			}

			p small {
				display: inline-block;
				margin-right: 20px;
				margin-bottom: 10px;
				color: #807d7a;
			}

		}

		/* 设置footer a 标签 字体颜色 */
		a {
			font-size: xx-small;
			line-height: 19px;
			color: #E5DFD9;
		}

		/* footer 最后一行的样式: ©2022 BC（中国）贸易有限公司 保留所有权利 */
		.network {
			color: #807d7a;
			margin-top: 30px;
			padding-bottom: 15px;
			font-size: xx-small;
			font-weight: bold;
			line-height: 30px;

			div a img {
				position: relative;
				top: -2px;
			}

			div span {
				display: inline-block;
				margin-left: 20px;
			}
		}

		/* footer 里特殊 的 p: 需要帮助? a 的字体颜色*/
		.footer_special_p a {
			display: inline-block;
			margin: 40px 0 17px;
			color: #807d7a;
		}

		.footer_special_p_2 img {
			position: relative;
			top: -2px;
			margin-right: 5px;
		}

		/* footer 里特殊 的 p: 在线顾问 */
		.footer_special_p_3 {
			margin-top: 35px;
		}

		/* footer 里特殊 的 p: 在线顾问 */
		.footer_special_p_4 {
			font-size: 12px;
			color: #E5DFD9;
		}

		.footer_special_p_4 a {
			text-decoration: none;
			border-bottom: 1px solid #E5DFD9;
		}

		.footer_special_p_5 {
			font-size: 12px;
			margin-top: 42px;
			margin-bottom: 24px;
			color: #807d7a;
		}

		.footer_special_p_6 {
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding-bottom: 15px;
		}
	}
</style>
