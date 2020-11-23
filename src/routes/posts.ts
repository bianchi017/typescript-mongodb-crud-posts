import { Router, Request, Response } from 'express';
const router = Router();

// Model
import Post from '../models/Post';

router.route('/create')
    .get((req: Request, res: Response) => {
        res.render('posts/create');
    })
    .post(async (req: Request, res: Response) => {
        const { title, content, category, contentComment } = req.body;
        const post = new Post({ title, content, category, contentComment });
        await post.save();
        res.redirect('/posts/list');
    });

router.route('/list')
    .get(async (req: Request, res: Response) => {
        const posts = await Post.find();
        res.render('posts/list', { posts });
    });

router.route('/delete/:id')
    .get(async (req: Request, res: Response) => {
        const { id } = req.params;
        await Post.findByIdAndDelete(id);
        res.redirect('/posts/list');
    });

router.route('/edit/:id')
    .get(async (req: Request, res: Response) => {
        const { id } = req.params;
        const post = await Post.findById(id);
        res.render('posts/edit', { post });
    })
    .post(async (req: Request, res: Response) => {
        const { id } = req.params;
        const { title, content, category } = req.body;
        await Post.findByIdAndUpdate(id, {
            title, content, category
        });
        res.redirect('/posts/list');
    })

router.route('/comment/:id')
    .get(async (req: Request, res: Response) => {
        const { id } = req.params;
        const post = await Post.findById(id);
        res.render('posts/comment', { post });
    })
    .post(async (req: Request, res: Response) => {
        const { id } = req.params;
        const { comment } = req.body;
        await Post.findByIdAndUpdate(id, {
            comment
        });
        res.redirect('/posts/list');
    })

export default router;