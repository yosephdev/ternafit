import { Card, CardContent } from "@/components/ui/card";

const FeaturedVideo = () => {
    return (
        <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-serif font-bold text-center mb-8">Featured Video</h2>
                <Card className="overflow-hidden">
                    <CardContent className="p-0">
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.youtube.com/embed/qkkYJwOuVnc"
                                title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full aspect-video rounded-xl shadow-lg"
                            />

                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default FeaturedVideo;
