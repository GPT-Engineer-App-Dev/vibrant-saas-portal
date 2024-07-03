import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Header */}
      <header className="flex items-center justify-between py-6 px-8 bg-gray-800 text-white">
        <div className="text-2xl font-bold">SaaS Company</div>
        <nav className="space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <Button variant="primary">Get Started</Button>
      </header>

      {/* Hero Section */}
      <section id="home" className="text-center py-20 bg-gray-100">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our SaaS Product</h1>
        <p className="text-xl mb-8">The best solution for your business needs.</p>
        <Button variant="primary" size="lg">Try for Free</Button>
        <img src="https://placehold.co/600x400" alt="placeholder" className="mx-auto mt-8" />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          <Card>
            <CardHeader>
              <CardTitle>Feature 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature 1.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature 2.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature 3.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-4">$10/month</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
              <Button variant="primary" className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pro</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-4">$20/month</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
              <Button variant="primary" className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-4">$30/month</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
              <Button variant="primary" className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="text-center">
                <Avatar className="mx-auto mb-4" />
                <p className="text-xl font-semibold">John Doe</p>
                <p className="text-gray-600">"This product has changed my life!"</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="text-center">
                <Avatar className="mx-auto mb-4" />
                <p className="text-xl font-semibold">Jane Smith</p>
                <p className="text-gray-600">"I can't imagine working without it."</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="text-center">
                <Avatar className="mx-auto mb-4" />
                <p className="text-xl font-semibold">Bob Johnson</p>
                <p className="text-gray-600">"A must-have for any business."</p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Footer */}
      <footer className="py-6 px-8 bg-gray-800 text-white">
        <div className="flex justify-between">
          <div>
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <Separator orientation="vertical" className="mx-2" />
            <a href="#terms" className="hover:underline">Terms of Service</a>
          </div>
          <div className="space-x-4">
            <a href="#facebook" className="hover:underline">Facebook</a>
            <a href="#twitter" className="hover:underline">Twitter</a>
            <a href="#linkedin" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;