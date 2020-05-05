<template>
	<div class="container_">
		<header-nav title="收货地址">
			<div slot="right" class="header_right" @click="handleContrlAddress(0)">添加新地址</div>
		</header-nav>
		<div class="address_list" >
			<div class="address_item" v-for="(item,index) in addressList" :key="index" @click="choiceBtn(item.type,item.id)">
				<div class="address_top">
					<div class="username">{{item.name}}</div>
					<div class="phone">{{item.tel}}</div>
				</div>
				<div class="address_detail">{{item.province}}{{item.city}}{{item.countyarea}}{{item.desc}}</div>
				<div class="address_contorl">
					<div class="default_address" :class="item.type == 0 ? 'active' : ''" @click.stop="handleDefaultAddress(item.id)">
						<i class="icon"></i>
						<h1>默认地址</h1>
					</div>
					<div class="btn">
						<button class="edit_address" @click.stop="handleContrlAddress(item.id)">编辑</button>
						<button class="delete_address" @click.stop="handleDetateAddress(item.id)">删除</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				addressList: [],
				id:0,
			};
		},
		created() {
			this.getAddressList();
			this.id = this.$route.query.id
		},
		methods: {
			async choiceBtn(type,id){
				if(type == 0){
					this.$router.push(`exchangeGoods/${this.id}`)
				}else{
					let result = await this.service.personalCenter.setDefaultAddress({
						...getUserData(),
						address_id: id
					});
					if(result.state == 200){
						this.$router.push(`exchangeGoods/${this.id}`)
					}
					
				}
			},
			async getAddressList() {
				let result = await this.service.personalCenter.getAddressList(
					getUserData()
				);
				if(isEmpty(result.data)) {
					return;
				}
				this.addressList = result.data;
			},
			// 设置默认地址
			async handleDefaultAddress(id) {
				let result = await this.service.personalCenter.setDefaultAddress({
					...getUserData(),
					address_id: id
				});
				if(result.state == 200) {
					this.getAddressList();
					return;
				}
				alert(result.msg);
			},
			// 添加收货地址 和 修改默认地址
			handleContrlAddress(id) {
				this.$router.push(`/changeAddress/${id}`);
			},
			async handleDetateAddress(id) {
				let result = await this.service.personalCenter.deleteAddress({
					...getUserData(),
					address_id: id
				});
				if(result.state == 200) {
					this.getAddressList();
					return;
				}
				alert(result.msg);
			}
		}
	};
</script>

<style scoped lang="scss">
	.container_ {
		width: 100%;
		min-height: 100%;
		height: auto;
		background: #f3f4f5;
		.header_right {
			@include word(15, #23252f);
		}
		.address_list {
			.address_item {
				margin-top: 10px;
				padding-left: 15px;
				background: #ffffff;
				.address_top {
					@include flex-center();
					padding-top: 20px;
					.username {
						@include word(15, #23252f);
					}
					.phone {
						margin-left: 15px;
						@include word(15, #25232f);
					}
				}
				.address_detail {
					padding: 15px 0;
					@include word(14, #5e5e5e);
					@include border-1px();
					word-wrap: break-word;
					word-break: break-all;
					overflow: hidden;
				}
				.address_contorl {
					@include flex-center(row, space-between);
					padding: 10px 0;
					.default_address {
						@include flex-center();
						.icon {
							@include icon( 25, "../../../../assets/student/personalCenter/icon_address.png");
						}
						h1 {
							@include word(14, #5e5e5e);
							margin-left: 10px;
						}
						&.active {
							.icon {
								@include icon( 25, "../../../../assets/student/personalCenter/icon_address_active.png");
							}
							h1 {
								@include word(14, #ffaa00);
							}
						}
					}
					.btn {
						button {
							@include word(14, #5e5e5e);
							@include border-1px(#838486, top bottom left right);
							width: 60px;
							height: 30px;
							text-align: center;
							border-radius: 2px;
							&.delete_address {
								margin: 0 15px;
							}
						}
					}
				}
			}
		}
	}
</style>