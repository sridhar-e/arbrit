import type { MetadataRoute } from "next";
import { blogPosts, courseDetails, trainers } from "@/lib/content";
import { siteUrl } from "@/lib/site";

/** Every public page. The thank-you page and API are left out (see robots.ts). */
export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly") => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  });

  return [
    page("/", 1, "weekly"),
    page("/courses", 0.9, "weekly"),
    page("/course/leea-foundation-certificate", 0.8),
    page("/course/leea-lifting-accessories-diploma", 0.8),
    ...courseDetails.map((course) => page(`/courses/${course.slug}`, 0.7)),
    page("/consultancy", 0.8),
    page("/about", 0.6),
    ...trainers.map((trainer) => page(`/about/trainers/${trainer.slug}`, 0.4)),
    page("/career", 0.6),
    page("/contact", 0.7),
    page("/blog", 0.6, "weekly"),
    ...blogPosts.map((post) => page(post.href, 0.5)),
    page("/privacy-policy", 0.2, "yearly"),
    page("/terms-and-conditions", 0.2, "yearly"),
  ];
}
