// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/**
 *
 * @param {*} req The request object
 * @param {*} res The response object
 */
export default function handler(req, res) {
    res.status(200).json({ name: "John Doe" });
}
