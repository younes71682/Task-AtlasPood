import { toast } from "react-toastify";

export const LoginSuccess = (props) => {
    const { username } = props
    toast.success(
        <div className="flex gap-1 justify-end ">
            <p>!خوش آمدید</p>
            <p>{username}</p>
        </div>
        , {
            position: "top-right"
        });

}

export const LoginError = () => {
    toast.error('نام کاربری یا رمز عبور صحیح نمی باشد', {
        position: "top-right"
    });

}
