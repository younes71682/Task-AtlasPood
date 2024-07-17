import { toast } from "react-toastify";

export const LoginSuccess = (props) => {
    const { username } = props
    toast.success(
        <div className="flex gap-1 justify-end text-[#484848]">
            <p className="font-Yekan">خوش آمدید!</p>
            <p>{username}</p>
        </div>
        , {
            position: "top-right"
        });

}

export const LoginError = () => {
    toast.error(<p className="font-Yekan text-[#484848]">نام کاربری یا رمز عبور صحیح نمی باشد</p>, {
        position: "top-right"
    });

}
