import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, CardFooter, Card, CardTitle, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import myImage from "image.png"

export default function Component() {

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <nav className="flex items-center gap-2 text-lg font-semibold md:gap-5 md:text-base">
          <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
            <HeartIcon className="w-6 h-6" />
            <span className="sr-only">Health</span>
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Button className="rounded-full md:hidden" size="icon" variant="ghost">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <form className="flex-1 ml-auto sm:flex-initial">
            <div className="flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-800">
              <SearchIcon className="h-5 w-5 ml-2.5 text-gray-500 dark:text-gray-400" />
              <Input
                className="w-0 placeholder-transparent bg-gray-100 dark:bg-gray-800"
                placeholder="Search"
                type="search"
              />
            </div>
          </form>
          <Button className="rounded-full" size="icon" variant="ghost">
            <BellIcon className="w-6 h-6" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
          <Button className="rounded-full" size="icon" variant="ghost">
            <img
              alt="Avatar"
              className="rounded-full"
              height="32"
              src="/image.png"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="grid flex-1 gap-6 px-4 md:gap-10 md:px-6">
        <div className="flex flex-col gap-4">
          <Card>
            <CardContent className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-2">
                <h1 className="text-3xl font-bold">8,231</h1>
                <p className="text-2xl text-gray-500 dark:text-gray-400">Steps</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">You're 72% to your daily goal</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <Button size="icon" variant="ghost">
                <ArrowLeftIcon className="w-4 h-4" />
                <span className="sr-only">Previous day</span>
              </Button>
              <Button size="icon" variant="ghost">
                <ArrowRightIcon className="w-4 h-4" />
                <span className="sr-only">Next day</span>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex items-center gap-4">
              <MapIcon className="w-6 h-6" />
              <CardTitle>Today's Distance Covered</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-2">
                <h1 className="text-3xl font-bold">3.5</h1>
                <p className="text-2xl text-gray-500 dark:text-gray-400">KM</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">You've burned 350 calories</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="flex items-center gap-4">
              <UsersIcon className="w-6 h-6" />
              <CardTitle>Leaderboard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">1.</div>
                    <div className="flex items-center gap-2">
                      <Image
                        alt="User 1"
                        className="rounded-full"
                        height={40}
                        src="/image.png"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width={40}
                      />
                      <div className="font-semibold">Alice</div>
                    </div>
                  </div>
                  <div className="font-semibold">12,345 steps</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div>2.</div>
                    <div className="flex items-center gap-2">
                      <img
                        alt="User 2"
                        className="rounded-full"
                        height={40}
                        src="/image.png"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width={40}
                      />
                      <div>Bob</div>
                    </div>
                  </div>
                  <div>10,234 steps</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div>3.</div>
                    <div className="flex items-center gap-2">
                      <img
                        alt="User 3"
                        className="rounded-full"
                        height="40"
                        src="/image.png"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                      <div>Charlie</div>
                    </div>
                  </div>
                  <div>8,765 steps</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div>4.</div>
                    <div className="flex items-center gap-2">
                      <img
                        alt="User 4"
                        className="rounded-full"
                        height="40"
                        src="/image.png"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                      <div>David</div>
                    </div>
                  </div>
                  <div>7,890 steps</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div>5.</div>
                    <div className="flex items-center gap-2">
                      <img
                        alt="User 5"
                        className="rounded-full"
                        height="40"
                        src="/image.png"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                      <div>Eve</div>
                    </div>
                  </div>
                  <div>6,543 steps</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center gap-4">
              <UsersIcon className="w-6 h-6" />
              <CardTitle>Friends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center gap-4">
                  <img
                    alt="User 1"
                    className="rounded-full"
                    height="64"
                    src="/image.png"


                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width="64"
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold">Alice</div>
                    <Button size="sm">Poke</Button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    alt="User 2"
                    className="rounded-full"
                    height="64"
                    src="/image.png"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width="64"
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold">Bob</div>
                    <Button size="sm">Poke</Button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    alt="User 3"
                    className="rounded-full"
                    height="64"
                    src="/image.png"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width="64"
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold">Charlie</div>
                    <Button size="sm">Poke</Button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    alt="User 4"
                    className="rounded-full"
                    height="64"
                    src="/image.png"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width="64"
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold">David</div>
                    <Button size="sm">Poke</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function MapIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
