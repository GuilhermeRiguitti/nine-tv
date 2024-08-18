import Image from "next/image";
import { Separator } from "../ui/separator";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "../ui/sheet";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";
export function Header() {
    return (
        <header className="bg-white container px-2">
                <div className="w-full flex justify-between items-center py-2">
                    <div>
                        <Image
                            src={'/images/logo-v-2.png'}
                            width={200}
                            height={143}
                            alt='Nine TV Logo'
                        />
                    </div>
                    <div className="flex flex-col items-end gap-6">
                        <div className="flex gap-4 items-center px-4">
                            <Sheet>
                                <SheetTrigger className="border rounded-sm px-2 py-1 text-[14px] flex gap-2 font-medium">info<GiFullMotorcycleHelmet size='20' /></SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                                        <SheetDescription>
                                            This action cannot be undone. This will permanently delete your account
                                            and remove your data from our servers.
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        
                        <NavigationMenu>
                            <NavigationMenuList className="flex gap-2">
                                <NavigationMenuItem>
                                    <Link href="/docs" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Documentation
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/docs" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Become
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/docs" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Lorem Ipsum
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/docs" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Sit Amet
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
                <Separator />
        </header>
    )
}