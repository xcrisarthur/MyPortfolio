import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import Fiverr_Icon from "../components/Fiverr_Icon";

import { useState } from "react";
import { HiMail, HiUser } from "react-icons/hi";
import { BsChatTextFill } from "react-icons/bs";
import { Modal } from "antd";
import emailjs from "emailjs-com";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";

const Contact = () => {
	const [isOpen, setIsOpen] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_blxy4ug", "template_25f5rwh", e.target, "-z58a5b6hAuYuSpBN")
			.then(
				(result) => {
					console.log(result.text);
					setIsOpen(true);
				},
				(error) => {
					console.log(error.text);
				}
			);

		e.target.reset();
	};

	return (
		<BannerLayout>
			<div className=" px-4 py-2">
				<div className="my-6 text-Snow flex flex-col gap-y-5">
					<h1 className="text-lg font-bold">Contact Information</h1>
					<div className="flex flex-col md:flex-row items-center gap-5 text-xs">
						<div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
							<div className="flex justify-between items-center">
								<span className="md:text-base">Country:</span>
								<span className="text-LightGray md:text-sm">Indonesia</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="md:text-base">City:</span>
								<span className="text-LightGray md:text-sm">Bandung</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="md:text-base">Status:</span>
								<span className="text-LightGray md:text-sm">Student</span>
							</div>
						</div>
						<div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
							<div className="flex justify-between items-center">
								<span className="md:text-base">Email:</span>
								<span className="text-LightGray text-sm">
									cristiantotriarthurito@gmail.com
								</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="md:text-base">Linkedin:</span>
								<span className="text-LightGray text-sm">
									Cristianto Tri Arthurito
								</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="md:text-base">Phone:</span>
								<span className="text-LightGray text-sm">+6285157264866</span>
							</div>
						</div>
					</div>
				</div>
				<div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
					{/* <a className='hover:scale-125 ease-in-out duration-700' href="" target='_blank' rel="noreferrer"><HiMail /></a> */}
					<a
						className="hover:scale-125 ease-in-out duration-700"
						href="https://github.com/xcrisarthur"
						target="_blank"
						rel="noreferrer">
						<FaGithub />
					</a>
					<a
						className="hover:scale-125 ease-in-out duration-700"
						href="https://www.linkedin.com/in/cristiantotriarthurito/"
						target="_blank"
						rel="noreferrer">
						<FaLinkedin />
					</a>
					{/* <a className='hover:scale-125 ease-in-out duration-700' href="https://x.com/iosamajavaid" target='_blank' rel="noreferrer"><FaTwitter /></a> */}
					{/* <a className='hover:scale-125 ease-in-out duration-700 hidden sm:block' href="https://www.fiverr.com/codeworthy" target='_blank' rel="noreferrer"><Fiverr_Icon /></a> */}
					{/* <a className='hover:scale-125 ease-in-out duration-700 text-2xl sm:text-4xl mt-1' href="#" target='_blank' rel="noreferrer"><SiUpwork /></a> */}
				</div>

				<div className="my-12 w-full h-auto text-Snow">
					<h1 className="text-lg font-bold">Get In Touch</h1>
					<div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
						<form onSubmit={sendEmail}>
							<div className="flex flex-col w-full">
								<div className="userIcon relative mb-6">
									<div
										id="icon"
										className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
										<HiUser />
									</div>
									<input
										type="text"
										className="input_stylings"
										placeholder="Name"
										name="from_name"
										required
									/>
								</div>
							</div>

							<div className="flex flex-col w-full">
								<div className="mailIcon relative mb-6">
									<div
										id="icon"
										className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
										<HiMail />
									</div>
									<input
										type="email"
										className="input_stylings"
										placeholder="Email"
										name="reply_to"
										required
									/>
								</div>
							</div>

							<div className="flex flex-col w-full">
								<div className="textIcon relative mb-6">
									<div
										id="icon"
										className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
										<BsChatTextFill />
									</div>
									<textarea
										rows={6}
										className="input_stylings"
										placeholder="Message"
										name="message"
										required
									/>
								</div>
							</div>

							<div className="my-4">
								<button type="submit" className="button">
									{" "}
									SEND MESSAGE{" "}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			{/* Modal untuk notifikasi */}
			<Modal
				className="card_stylings backdrop-blur-3xl drop-shadow-2xl"
				centered
				open={isOpen}
				footer={null}
				closable={false}
				onOk={() => setIsOpen(false)}
				onCancel={() => setIsOpen(false)}>
				<div className="flex flex-col items-center justify-center">
					<h1 className="text-Green font-bold text-2xl">Message Sent</h1>
					<p className="underline text-Snow">Thank you for your message!</p>
				</div>
			</Modal>
			<Footer />
		</BannerLayout>
	);
};

export default Contact;
