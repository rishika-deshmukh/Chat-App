import Background from "@/assets/login2.png";
import Victory from "@/assets/victory.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { useState } from "react";
import { apiClient } from "@/lib/api-client";
import { toast } from "sonner";
import { SIGNUP_ROUTE } from "@/utils/constants";
import { LOGIN_ROUTE } from "@/utils/constants";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")
  
  const [confirmPassword, setConfirmPassword] = useState("")

  const validatesLogin = () => {
    if (!email.length) {
      toast.error("Email is required.");
      return false;
    }
    if (!password.length){
      toast.error("Password is required.");
      
    }
    return true;
  };

  const validateSignup = () => {
    if (!email.length) {
      toast.error("Email is required.");
      return false;
    }
    if (!password.length){
      toast.error("Password is required.");
      
    }
    if(password !==confirmPassword){
      toast.error("Password and confirmed password should be same");
      return false;
    }
    return true;
  };
  
  const handleLogin=async () => {
    if(validatesLogin()){
      const response = await apiClient.post(
        LOGIN_ROUTE, 
        { email, password }, 
        { withCredentials: true }
      );
        console.log({ response });
    }
    if(response.data.user.id){
      if(response.data.user.profileSetup){
        nagigate("/chat");
      }
      else{
        navigate("/profile");
      }
    }
  };

  const handleSignup = async () => {
    if(validateSignup()){
      const response = await apiClient.post(
        SIGNUP_ROUTE, { email, password}, {withCredentials:true});
      console.log({ response });
    }
    if(response.status===201){
      navigate("/profile");
    }
  };
  
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className= "h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2" >
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center">
              <h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>  
              <img src ={Victory} alt="Victory emoji" className="h-[100px]" />
            </div>  
            <p className="font-medium text-center">
              Fill in the details to get started with the best chat app!
            </p>
          </div> 
          <div className="flex items-center justify-center w-full">
            <Tabs className="w-3/4" defaultValue="login">
              <TabsList className="bg-transparent rounded-none w-full flex">
                <TabsTrigger 
                  value="login" 
                  className="w-1/2 text-black text-opacity-90 border-b-2 rounded-none p-3 transition-all duration-300 hover:text-purple-500 hover:border-b-purple-500"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger 
                  value="signup" 
                  className="w-1/2 text-black text-opacity-90 border-b-2 rounded-none p-3 transition-all duration-300 hover:text-purple-500 hover:border-b-purple-500"
                >
                  Sign-up
                </TabsTrigger>
              </TabsList>
              <TabsContent value="login" className="flex flex-col gap-5 mt-10 ">
                <Input placeholder="Email" type="email" className="rounded-full p-6 " value={email} onChange = {e=>setEmail(e.target.value)}/>
                <Input placeholder="Password" type="password" className="rounded-full p-6 " value={password} onChange = {e=>setPassword(e.target.value)}/>
                <Button className="rounded-full p-6" onClick={handleLogin}>Login</Button>
              </TabsContent>
              <TabsContent value="signup" className="flex flex-col gap-5 ">

                <Input placeholder="Email" type="email" className="rounded-full p-6 " value={email} onChange = {e=>setEmail(e.target.value)}/>
                <Input placeholder="Password" type="password" className="rounded-full p-6 " value={password} onChange = {e=>setPassword(e.target.value)}/>
                <Input placeholder="Confirm Password" type="password" className="rounded-full p-6 " value={confirmPassword} onChange = {e=>setConfirmPassword(e.target.value)}/>
                <Button className="rounded-full p-6" onClick={handleSignup}>Signup</Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
          <div className="hidden xl:flex justify-center items-center">
            <img src={Background} alt="bg" className="h-[500px]"/>

          </div>
      </div>
    </div>
   
  );
};

export default Auth;
