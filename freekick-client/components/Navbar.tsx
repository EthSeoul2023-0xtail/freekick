import { useWalletSelector } from "@/contexts/WalletSelectorContext";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
    isHome: boolean;
}

export default function Navbar({ isHome }: NavbarProps) {
    const { selector, modal, accounts, accountId } = useWalletSelector();

    const handleSignIn = () => {
        modal.show();
    };

    const handleSignOut = async () => {
        const wallet = await selector.wallet();

        wallet.signOut().catch((err) => {
            console.log("Failed to sign out");
            console.error(err);
        });
    };

    return (
        <>
            <Image
                src="/phone_top.svg"
                alt="FreeKick Logo"
                className={styles.top}
                width={390}
                height={44}
                priority
            />
            <nav className={styles.nav}>
                <Link href={"/"}>
                    {isHome ? (
                        <Image
                            src="/logo.svg"
                            alt="FreeKick Logo"
                            width={45}
                            height={45}
                            priority
                        />
                    ) : (
                        <div className={styles.logo}>
                            <Image
                                src="/left_arrow.svg"
                                alt="FreeKick Logo"
                                width={18}
                                height={18}
                                priority
                            />
                        </div>
                    )}
                </Link>
                <div className={styles.buttons}>
                    {selector.isSignedIn() && (
                        <>
                            <button className={styles.account_button}>
                                <Image
                                    src={"/ball_icon.svg"}
                                    alt="ball"
                                    width={15}
                                    height={15}
                                />
                                <div>1,000 KIC</div>
                            </button>
                            <button className={styles.signout_button}>
                                {accountId}
                                <Image
                                    src={"/arrow_down.svg"}
                                    alt="arrow down icon"
                                    width={10}
                                    height={5}
                                    onClick={handleSignOut}
                                />
                            </button>
                        </>
                    )}
                    {!selector.isSignedIn() && (
                        <>
                            <button
                                className={styles.signin_button}
                                onClick={handleSignIn}
                            >
                                Sign in
                            </button>
                            <button className={styles.signup_button}>
                                Create Account
                            </button>
                        </>
                    )}
                </div>
            </nav>
        </>
    );
}
