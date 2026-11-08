import AdmissionVisit from "@/components/home/AdmissionVisit";
import CampusLife from "@/components/home/CampusLife";
import Hero from "@/components/home/Hero";
import HonoursBoard from "@/components/home/HonoursBoard";
import Journey from "@/components/home/Journey";
import Leadership from "@/components/home/Leadership";
import Mediums from "@/components/home/Mediums";
import Updates from "@/components/home/Updates";
import Values from "@/components/home/Values";
import PublicShell from "@/components/site/PublicShell";
import { school } from "@/config/school";
import { getAdmissionGuide, getClasses, getNews, getNotices } from "@/lib/data";

export default async function HomePage() {
    const [classes, notices, news, admission] = await Promise.all([
        getClasses(),
        getNotices({ limit: 4 }),
        getNews({ limit: 3 }),
        getAdmissionGuide(),
    ]);

    // Home sits at app/page.js (not inside the (public) group) so it shares the shell explicitly.
    return (
        <PublicShell>
            <SchoolJsonLd />
            <Hero />
            <Mediums />
            <HonoursBoard />
            <Journey classes={classes} />
            <Values />
            <CampusLife />
            <Leadership />
            <Updates notices={notices} news={news} />
            <AdmissionVisit steps={admission.steps} />
        </PublicShell>
    );
}

function SchoolJsonLd() {
    const c = school.contact;
    const data = {
        "@context": "https://schema.org",
        "@type": school.schemaType,
        name: school.name,
        description: school.description,
        url: school.siteUrl,
        logo: new URL(school.logo.full, school.siteUrl).toString(),
        telephone: c.phone.replace(/[\s-]/g, ""),
        foundingDate: String(school.established),
        address: {
            "@type": "PostalAddress",
            streetAddress: c.addressLines[0],
            addressLocality: c.addressLocality,
            postalCode: c.postalCode,
            addressCountry: "BD",
        },
        geo: { "@type": "GeoCoordinates", latitude: c.geo.lat, longitude: c.geo.lng },
        sameAs: Object.values(school.social).filter(Boolean),
        ...(!school.leadership.chairman.placeholder && { founder: { "@type": "Person", name: school.leadership.chairman.name } }),
    };
    return (
        <script
            type="application/ld+json"
            // JSON from our own config; escape "<" so it can never close the script tag.
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
        />
    );
}
