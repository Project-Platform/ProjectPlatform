import { decode } from "@auth/core/jwt";

export async function authentication(req, res, next) {
    const token = req.cookies['next-auth.session-token'] || null

    if (token == null) {
        return res.redirect("/api/auth/signin")
    }

    const decoded = await decode({
        token: token,
        secret: "secret",
    });

    if (decoded !== null) {
        req.accessToken = decoded.access_token;
        
    }
}